// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventTicketing {
    uint256 public eventId;
    uint256 public ticketId;

    struct Event {
        string name;
        string description; // Event description
        string imageUrl;    // Event image URL
        uint256 date;
        bool isOpen;
        uint256 totalTickets;
        uint256 ticketsSold;
        address owner;
        uint256 ticketPrice; // Price of each ticket in wei
        uint256 balance;     // Balance specific to this event
    }

    struct Ticket {
        uint256 eventId;
        address owner;
        bool hasEntered;
    }

    mapping(uint256 => Event) public events;
    mapping(uint256 => Ticket) public tickets;

    event EventCreated(uint256 eventId, string name, string description, string imageUrl, uint256 date, uint256 totalTickets, uint256 ticketPrice);
    event TicketPurchased(uint256 ticketId, uint256 eventId, address buyer, uint256 price);
    event TicketEntered(uint256 ticketId);

    constructor() {
        eventId = 1;
        ticketId = 1;
    }

    function createEvent(string memory _name, string memory _description, string memory _imageUrl, uint256 _date, uint256 _totalTickets, uint256 _ticketPrice) external {
        require(_date > block.timestamp, "Event must be in the future");
        require(_totalTickets > 0, "Total tickets must be greater than 0");
        require(_ticketPrice > 0, "Ticket price must be greater than 0");

        events[eventId] = Event(_name, _description, _imageUrl, _date, true, _totalTickets, 0, msg.sender, _ticketPrice, 0);
        emit EventCreated(eventId, _name, _description, _imageUrl, _date, _totalTickets, _ticketPrice);
        eventId++;
    }

    function purchaseTicket(uint256 _eventId) external payable returns (uint256) {
        Event storage eventInfo = events[_eventId];
        require(eventInfo.isOpen, "Event is not open for ticket sales");
        require(eventInfo.ticketsSold < eventInfo.totalTickets, "No more tickets available");
        require(msg.value == eventInfo.ticketPrice, "Incorrect ticket price");

        tickets[ticketId] = Ticket(_eventId, msg.sender, false);
        eventInfo.ticketsSold++;
        eventInfo.balance += msg.value; // Update the event's balance
        emit TicketPurchased(ticketId, _eventId, msg.sender, msg.value);
        uint256 purchasedTicketId = ticketId;
        ticketId++;
        return purchasedTicketId;
    }

    function enterEvent(uint256 _ticketId) external {
        require(tickets[_ticketId].owner == msg.sender, "You don't own this ticket");
        require(!tickets[_ticketId].hasEntered, "Ticket has already been used");

        tickets[_ticketId].hasEntered = true;
        emit TicketEntered(_ticketId);
    }

    function closeEvent(uint256 _eventId) external {
        require(events[_eventId].owner == msg.sender, "Only the event owner can close the event");
        events[_eventId].isOpen = false;
    }

    // Withdraw event-specific balance (earned from ticket sales)
    function withdrawFunds(uint256 _eventId) external {
        Event storage eventInfo = events[_eventId];
        require(msg.sender == eventInfo.owner, "Only the event owner can withdraw funds");
        require(!eventInfo.isOpen, "Event must be closed before withdrawing funds");
        uint256 balanceToWithdraw = eventInfo.balance;
        eventInfo.balance = 0; // Reset the event's balance
        payable(msg.sender).transfer(balanceToWithdraw);
    }

    // Allow the event owner to update event details
    function updateEventDetails(uint256 _eventId, string memory _name, string memory _description, string memory _imageUrl, uint256 _date, uint256 _totalTickets, uint256 _ticketPrice) external {
        Event storage eventInfo = events[_eventId];
        require(eventInfo.isOpen, "Event is not open for updates");
        require(msg.sender == eventInfo.owner, "Only the event owner can update event details");
        eventInfo.name = _name;
        eventInfo.description = _description;
        eventInfo.imageUrl = _imageUrl;
        eventInfo.date = _date;
        eventInfo.totalTickets = _totalTickets;
        eventInfo.ticketPrice = _ticketPrice;
    }

    // Get all events
    function getAllEvents() external view returns (Event[] memory) {
        Event[] memory allEvents = new Event[](eventId - 1);
        for (uint256 i = 1; i < eventId; i++) {
            allEvents[i - 1] = events[i];
        }
        return allEvents;
    }
}
