# Use Case UC-02: Checkout Order

**Primary Actor:** Customer  
**Scope:** NovaStore – E-commerce Prototype  

---

## Brief
The customer completes the purchase of items in their cart.

---

## Preconditions
- The customer has items in their cart.
- The system is running.

---

## Trigger
The customer clicks the **Checkout** button.

---

## Basic Flow
1. Customer views the cart.
2. Customer clicks **Checkout**.
3. Customer enters required information (e.g., shipping details).
4. System sends the order information to the backend API.
5. Backend validates the data.
6. Backend creates an order record.
7. System shows an order confirmation message.

---

## Alternate Flows
- If required information is missing, the system shows an error message.
- If the server fails, the system asks the user to try again later.

---

## Postconditions
- The order is stored in the system.
- The cart is cleared.

