<h1>Hotel Management API</h1>

<p>
A full RESTful API for hotel administration created with Node.js, Express, and MongoDB. This API supports full CRUD operations for managing rooms, guests, and bookings, as well as sophisticated relationship capabilities like room availability checking, double-booking prevention, and automatic room status monitoring.
</p>

# 🌐 Base URL
https://hotel-management-4-hwal.onrender.com



## 📁 Endpoints

| Resource     | Method | Endpoint            | Description                |
| ------------ | ------ | ------------------- | -------------------------- |
| **Rooms**    | GET    | `/api/rooms`        | Get all rooms              |
|              | POST   | `/api/rooms`        | Add a new room             |
|              | PUT    | `/api/rooms/:id`    | Update an existing room    |
|              | DELETE | `/api/rooms/:id`    | Delete a room              |
| **Guests**   | GET    | `/api/guests`       | Get all guests             |
|              | POST   | `/api/guests`       | Add a new guest            |
|              | PUT    | `/api/guests/:id`   | Update an existing guest   |
|              | DELETE | `/api/guests/:id`   | Delete a guest             |
| **Bookings** | GET    | `/api/bookings`     | Get all bookings           |
|              | POST   | `/api/bookings`     | Add a new booking          |
|              | PUT    | `/api/bookings/:id` | Update an existing booking |
|              | DELETE | `/api/bookings/:id` | Delete a booking           |


# 🧪 Sample Requests
## ➤ Get All Rooms
GET https://hotel-management-3-eooh.onrender.com/api/rooms

## ➤ Create New Rooms

POST https://hotel-management-3-eooh.onrender.com/api/rooms
Body:

{
  "number": 101,
  "type": "Single",
  "price": 1500,
  "status": "available"
}

## ➤ Create New Guest

POST https://hotel-management-3-eooh.onrender.com/api/guests
Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "09123456789"
}

## ➤ Create New Booking

POST https://hotel-management-3-eooh.onrender.com/api/bookings

Body:
{
  "guestId": "6727d823cf8b3a3b4a9cd3e1",
  "roomId": "6727d831cf8b3a3b4a9cd3f5",
  "checkIn": "2025-10-23",
  "checkOut": "2025-10-25",
  "status": "booked"
}



<hr>

<h2>Features</h2>

<ul>
  <li><b>Full CRUD Operations:</b></li>
  <ul>
    <li>Rooms Management (Create, Read, Update, Delete)</li>
    <li>Guests Management (Create, Read, Update, Delete)</li>
    <li>Bookings Management (Create, Read, Update, Delete)</li>
  </ul>
  <li><b>Advanced Relationship Features:</b></li>
  <ul>
    <li>Room Availability Checking for specific date ranges</li>
    <li>Double-booking Prevention with conflict detection</li>
    <li>Guest Booking History</li>
    <li>Room Booking History</li>
    <li>Cascade Delete Protection (prevents deletion of resources with active bookings)</li>
  </ul>
  <li><b>Smart Automation:</b> Automatic room status updates (available ↔ occupied)</li>
  <li><b>Data Validation:</b> Input validation with proper error messages and HTTP status codes</li>
  <li><b>Pagination & Filtering:</b> Support for pagination, search, and filtering on all list endpoints</li>
  <li><b>RESTful Design:</b> Proper REST API conventions with JSON format</li>
</ul>

<hr>

<h2>Tech Stack</h2>

<ul>
  <li><b>Runtime:</b> Node.js</li>
  <li><b>Framework:</b> Express.js</li>
  <li><b>Database:</b> MongoDB (Mongoose ODM)</li>
  <li><b>Database Hosting:</b> MongoDB Atlas</li>
  <li><b>Additional Libraries:</b> dotenv, cors, morgan, nodemon</li>
</ul>


<hr>

<pre>
PORT=3000
MONGO_URI=mongodb+srv://management:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/hotel-management?retryWrites=true&w=majority
NODE_ENV=development
</pre>

<p><b>⚠️ Important:</b></p>
<ul>
  <li>Replace <code>YOUR_PASSWORD</code> with your actual MongoDB user password</li>
  <li>Replace the cluster URL with your actual cluster URL</li>
  <li>Add <code>/hotel-management</code> before the <code>?</code> to specify the database name</li>
</ul>


<hr>

<h3>Sample Request Examples</h3>

<h4>1️⃣ Get All Rooms</h4>
<pre>
GET http://localhost:3000/api/rooms
Content-Type: application/json

{
    "success": true,
    "count": 8,
    "total": 8,
    "page": 1,
    "pages": 1,
    "data": [
        {
            "_id": "68ec991578eee54435e342db",
            "number": "101",
            "type": "single",
            "price": 100,
            "status": "available",
            "amenities": [
                "WiFi",
                "TV"
            ],
            "capacity": 1,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.151Z",
            "updatedAt": "2025-10-13T06:15:49.151Z"
        },
        {
            "_id": "68ec991578eee54435e342dc",
            "number": "102",
            "type": "double",
            "price": 150,
            "status": "available",
            "amenities": [
                "WiFi",
                "TV",
                "Mini Bar"
            ],
            "capacity": 2,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.152Z",
            "updatedAt": "2025-10-13T06:15:49.152Z"
        },
        {
            "_id": "68ec991578eee54435e342dd",
            "number": "103",
            "type": "suite",
            "price": 300,
            "status": "available",
            "amenities": [
                "WiFi",
                "TV",
                "Mini Bar",
                "Jacuzzi"
            ],
            "capacity": 4,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.153Z",
            "updatedAt": "2025-10-13T06:15:49.153Z"
        },
        {
            "_id": "68ec991578eee54435e342de",
            "number": "201",
            "type": "single",
            "price": 100,
            "status": "available",
            "amenities": [
                "WiFi",
                "TV"
            ],
            "capacity": 1,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.153Z",
            "updatedAt": "2025-10-13T06:15:49.153Z"
        },
        {
            "_id": "68ec991578eee54435e342df",
            "number": "202",
            "type": "double",
            "price": 150,
            "status": "occupied",
            "amenities": [
                "WiFi",
                "TV",
                "Mini Bar"
            ],
            "capacity": 2,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.153Z",
            "updatedAt": "2025-10-13T06:15:49.153Z"
        },
        {
            "_id": "68ec991578eee54435e342e0",
            "number": "203",
            "type": "deluxe",
            "price": 250,
            "status": "available",
            "amenities": [
                "WiFi",
                "TV",
                "Mini Bar",
                "Balcony"
            ],
            "capacity": 3,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.153Z",
            "updatedAt": "2025-10-13T06:15:49.153Z"
        },
        {
            "_id": "68ec991578eee54435e342e1",
            "number": "301",
            "type": "suite",
            "price": 350,
            "status": "available",
            "amenities": [
                "WiFi",
                "TV",
                "Mini Bar",
                "Jacuzzi",
                "Kitchen"
            ],
            "capacity": 4,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.153Z",
            "updatedAt": "2025-10-13T06:15:49.153Z"
        },
        {
            "_id": "68ec991578eee54435e342e2",
            "number": "302",
            "type": "deluxe",
            "price": 250,
            "status": "maintenance",
            "amenities": [
                "WiFi",
                "TV",
                "Mini Bar",
                "Balcony"
            ],
            "capacity": 3,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.153Z",
            "updatedAt": "2025-10-13T06:15:49.153Z"
        }
    ]
}
</pre>

<h4>2️⃣ Get All Guests</h4>
<pre>
GET http://localhost:3000/api/guests
Content-Type: application/json

{
    "success": true,
    "count": 5,
    "total": 5,
    "page": 1,
    "pages": 1,
    "data": [
        {
            "_id": "68ec991578eee54435e342e5",
            "name": "Jane Smith",
            "email": "jane.smith@email.com",
            "phone": "+1234567891",
            "address": "456 Oak Ave, Los Angeles",
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.213Z",
            "updatedAt": "2025-10-13T06:15:49.213Z"
        },
        {
            "_id": "68ec991578eee54435e342e4",
            "name": "John Doe",
            "email": "john.doe@email.com",
            "phone": "+1234567890",
            "address": "123 Main St, New York",
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.213Z",
            "updatedAt": "2025-10-13T06:15:49.213Z"
        },
        {
            "_id": "68ec991578eee54435e342e8",
            "name": "Charlie Brown",
            "email": "charlie.brown@email.com",
            "phone": "+1234567894",
            "address": "654 Maple Dr, Phoenix",
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.213Z",
            "updatedAt": "2025-10-13T06:15:49.213Z"
        },
        {
            "_id": "68ec991578eee54435e342e6",
            "name": "Bob Johnson",
            "email": "bob.johnson@email.com",
            "phone": "+1234567892",
            "address": "789 Pine Rd, Chicago",
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.213Z",
            "updatedAt": "2025-10-13T06:15:49.213Z"
        },
        {
            "_id": "68ec991578eee54435e342e7",
            "name": "Alice Williams",
            "email": "alice.williams@email.com",
            "phone": "+1234567893",
            "address": "321 Elm St, Houston",
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.213Z",
            "updatedAt": "2025-10-13T06:15:49.213Z"
        }
    ]
}
</pre>

<h4>3️⃣ Get All Bookings</h4>
<pre>
GET http://localhost:3000/api/bookings
Content-Type: application/json
{
    "success": true,
    "count": 3,
    "total": 3,
    "page": 1,
    "pages": 1,
    "data": [
        {
            "_id": "68ec991578eee54435e342ed",
            "guestId": {
                "_id": "68ec991578eee54435e342e6",
                "name": "Bob Johnson",
                "email": "bob.johnson@email.com",
                "phone": "+1234567892"
            },
            "roomId": {
                "_id": "68ec991578eee54435e342db",
                "number": "101",
                "type": "single",
                "price": 100
            },
            "checkIn": "2025-10-18T06:15:49.269Z",
            "checkOut": "2025-10-21T06:15:49.269Z",
            "status": "pending",
            "totalPrice": 300,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.271Z",
            "updatedAt": "2025-10-13T06:15:49.271Z"
        },
        {
            "_id": "68ec991578eee54435e342ec",
            "guestId": {
                "_id": "68ec991578eee54435e342e5",
                "name": "Jane Smith",
                "email": "jane.smith@email.com",
                "phone": "+1234567891"
            },
            "roomId": {
                "_id": "68ec991578eee54435e342dd",
                "number": "103",
                "type": "suite",
                "price": 300
            },
            "checkIn": "2025-10-14T06:15:49.269Z",
            "checkOut": "2025-10-17T06:15:49.269Z",
            "status": "confirmed",
            "totalPrice": 900,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.271Z",
            "updatedAt": "2025-10-13T06:15:49.271Z"
        },
        {
            "_id": "68ec991578eee54435e342eb",
            "guestId": {
                "_id": "68ec991578eee54435e342e4",
                "name": "John Doe",
                "email": "john.doe@email.com",
                "phone": "+1234567890"
            },
            "roomId": {
                "_id": "68ec991578eee54435e342df",
                "number": "202",
                "type": "double",
                "price": 150
            },
            "checkIn": "2025-10-13T06:15:49.269Z",
            "checkOut": "2025-10-20T06:15:49.269Z",
            "status": "checked-in",
            "totalPrice": 1050,
            "notes": "Early check-in requested",
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.271Z",
            "updatedAt": "2025-10-13T06:15:49.271Z"
        }
    ]
}
</pre>

<h4>4️⃣ Create a New Guest</h4>
<pre>
POST http://localhost:3000/api/guests
Content-Type: application/json

{
  "name": "Sarah Connor",
  "email": "sarah.connor@email.com",
  "phone": "+1234567895",
  "address": "123 Tech Street, San Francisco"
}
</pre>

<h4>5️⃣ Create a Booking</h4>
<pre>
POST http://localhost:3000/api/bookings
Content-Type: application/json

{
    "_id": "68ec991578eee54435e342ed",
    "guestId": {
        "_id": "68ec991578eee54435e342e6",
        "name": "Bob Johnson",
        "email": "bob.johnson@email.com",
        "phone": "+1234567892"
    },
    "roomId": {
        "_id": "68ec991578eee54435e342db",
        "number": "101",
        "type": "single",
        "price": 100
    },
    "checkIn": "2025-10-18T06:15:49.269Z",
    "checkOut": "2025-10-21T06:15:49.269Z",
    "status": "pending",
    "totalPrice": 300,
    "__v": 0,
    "createdAt": "2025-10-13T06:15:49.271Z",
    "updatedAt": "2025-10-13T06:15:49.271Z"
}
</pre>

<h4>6️⃣ Get Guest's Booking History</h4>
<pre>
GET http://localhost:3000/api/guests/:id/bookings
Content-Type: application/json
{
    "success": true,
    "count": 1,
    "data": [
        {
            "_id": "68ec991578eee54435e342ec",
            "guestId": "68ec991578eee54435e342e5",
            "roomId": {
                "_id": "68ec991578eee54435e342dd",
                "number": "103",
                "type": "suite",
                "price": 300,
                "status": "available",
                "amenities": [
                    "WiFi",
                    "TV",
                    "Mini Bar",
                    "Jacuzzi"
                ],
                "capacity": 4,
                "__v": 0,
                "createdAt": "2025-10-13T06:15:49.153Z",
                "updatedAt": "2025-10-13T06:15:49.153Z"
            },
            "checkIn": "2025-10-14T06:15:49.269Z",
            "checkOut": "2025-10-17T06:15:49.269Z",
            "status": "confirmed",
            "totalPrice": 900,
            "__v": 0,
            "createdAt": "2025-10-13T06:15:49.271Z",
            "updatedAt": "2025-10-13T06:15:49.271Z"
        }
    ]
}
</pre>

<h4>7️⃣ Update Booking Status</h4>
<pre>
PUT http://localhost:3000/api/bookings/:id
Content-Type: application/json

{
  "status": "confirmed"
}
</pre>

<hr>

<h2>Sample Response Formats</h2>

<h3>✅ Success Response (GET All)</h3>

<pre>
{
  "success": true,
  "count": 8,
  "total": 8,
  "page": 1,
  "pages": 1,
  "data": [
    {
      "_id": "507f191e810c19729de860ea",
      "number": "101",
      "type": "single",
      "price": 100,
      "status": "available",
      "capacity": 1,
      "amenities": ["WiFi", "TV"],
      "createdAt": "2025-10-14T00:00:00.000Z",
      "updatedAt": "2025-10-14T00:00:00.000Z"
    }
  ]
}
</pre>

<h3>✅ Success Response (POST/PUT)</h3>

<pre>
{
  "success": true,
  "data": {
    "_id": "507f191e810c19729de860ea",
    "number": "101",
    "type": "single",
    "price": 100,
    "status": "available"
  }
}
</pre>

<h3>❌ Error Response (404 - Not Found)</h3>

<pre>
{
  "success": false,
  "message": "Room not found"
}
</pre>

<h3>❌ Error Response (400 - Validation Error)</h3>

<pre>
{
  "success": false,
  "message": "Room number is required, Price is required"
}
</pre>

<h3>❌ Error Response (400 - Business Logic)</h3>

<pre>
{
  "success": false,
  "message": "Room is not available for the selected dates",
  "conflictingBooking": {
    "checkIn": "2025-10-20T00:00:00.000Z",
    "checkOut": "2025-10-25T00:00:00.000Z"
  }
}
</pre>

<hr>

<h2>Database Schema</h2>

<h3>Room Schema</h3>
<pre>
{
  number: String (required, unique),
  type: String (required, enum: ['single', 'double', 'suite', 'deluxe']),
  price: Number (required, min: 0),
  status: String (enum: ['available', 'occupied', 'maintenance'], default: 'available'),
  amenities: [String],
  capacity: Number (default: 1, min: 1),
  timestamps: true
}
</pre>

<h3>Guest Schema</h3>
<pre>
{
  name: String (required),
  email: String (required, unique, validated),
  phone: String (required),
  address: String,
  idNumber: String,
  timestamps: true
}
</pre>

<h3>Booking Schema</h3>
<pre>
{
  guestId: ObjectId (required, ref: 'Guest'),
  roomId: ObjectId (required, ref: 'Room'),
  checkIn: Date (required),
  checkOut: Date (required, must be after checkIn),
  status: String (enum: ['pending', 'confirmed', 'checked-in', 'checked-out', 'cancelled']),
  totalPrice: Number (auto-calculated),
  notes: String,
  timestamps: true
}
</pre>

<hr>

<h2>Business Logic & Validation</h2>

<h3>Room Management</h3>
<ul>
  <li>✅ Room numbers must be unique</li>
  <li>✅ Price cannot be negative</li>
  <li>✅ Status automatically updates when booked/checked-out</li>
  <li>✅ Cannot delete room with active bookings</li>
</ul>

<h3>Guest Management</h3>
<ul>
  <li>✅ Email must be unique and valid format</li>
  <li>✅ Cannot delete guest with active bookings</li>
  <li>✅ Search works across name, email, and phone fields</li>
</ul>

<h3>Booking Management</h3>
<ul>
  <li>✅ Check-in date cannot be in the past</li>
  <li>✅ Check-out must be after check-in</li>
  <li>✅ Room availability is checked before booking</li>
  <li>✅ Double-booking prevention (same room, overlapping dates)</li>
  <li>✅ Total price calculated automatically (days × room price)</li>
  <li>✅ Room status updates when booking is created/deleted</li>
  <li>✅ Cannot book room in maintenance status</li>
</ul>

<hr>

<h2>HTTP Status Codes</h2>

<table>
  <tr>
    <th>Code</th>
    <th>Meaning</th>
    <th>When Used</th>
  </tr>
  <tr>
    <td>200</td>
    <td>OK</td>
    <td>Successful GET, PUT, DELETE</td>
  </tr>
  <tr>
    <td>201</td>
    <td>Created</td>
    <td>Successful POST (resource created)</td>
  </tr>
  <tr>
    <td>400</td>
    <td>Bad Request</td>
    <td>Validation errors, business logic violations</td>
  </tr>
  <tr>
    <td>404</td>
    <td>Not Found</td>
    <td>Resource doesn't exist</td>
  </tr>
  <tr>
    <td>500</td>
    <td>Server Error</td>
    <td>Unexpected server errors</td>
  </tr>
</table>

<hr>

<h2>Troubleshooting</h2>

<h3>Server Won't Start</h3>

<p><b>Problem:</b> <code>Cannot find module 'express'</code></p>
<pre>
# Solution: Install dependencies
npm install
</pre>

<p><b>Problem:</b> <code>Cannot connect to MongoDB</code></p>
<pre>
# Solution: Check your .env file
# 1. Verify MONGO_URI is correct
# 2. Check password has no special characters (or URL encode them)
# 3. Verify IP whitelist in MongoDB Atlas includes 0.0.0.0/0
</pre>


<h3>Database Issues</h3>

<p><b>Problem:</b> Seed script fails</p>
<pre>
# Solution:
# 1. Make sure server is NOT running
# 2. Check MongoDB connection string
# 3. Run: npm run seed
</pre>

<p><b>Problem:</b> No data returned from API</p>
<pre>
# Solution: Run seed script to populate database
npm run seed
</pre>

<h3>API Testing Issues</h3>

<p><b>Problem:</b> Postman shows "Could not connect"</p>
<pre>
# Solution:
# 1. Check if server is running (npm run dev)
# 2. Verify correct URL (http://localhost:3000)
# 3. Check firewall/antivirus settings
</pre>


<p>
This project is intended for educational purposes as part of a web development course.  
Feel free to modify, extend, or reuse it for learning and demonstration purposes.
</p>

<hr>

