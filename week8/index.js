const mongoose = require('mongoose');

// Your MongoDB Atlas URI
const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.bmagmlk.mongodb.net/week8';

async function main() {
    try {
        // Connect to MongoDB (NO OPTIONS NEEDED in Mongoose 7+)
        await mongoose.connect(MONGO_URI);
        console.log("✅ Connected to MongoDB Atlas");

        // Define Schema
        const PersonSchema = new mongoose.Schema({
            name: { type: String, required: true },
            age: Number,
            Gender: String,
            Salary: Number
        });

        // Create Model
        const Person = mongoose.model('Person', PersonSchema, 'personCollection');

        // ===============================
        // TASK 1: Insert Single Document
        // ===============================
        console.log("\n=== TASK 1: Adding Single Document ===");

        const doc1 = new Person({
            name: "Sakar",
            age: 21,
            Gender: "Male",
            Salary: 3456
        });

        await doc1.save();
        console.log("🎉 New person added:", doc1.name);

         // ==========================================
        // TASK 2: Adding multiple documents
        // ==========================================
        console.log("\n=== TASK 2: Adding Multiple Documents ===");
        const manypersons = [
            { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
            { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
            { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
            { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
        ];

        const insertResult = await Person.insertMany(manypersons);
        console.log (`Data inserted: ${insertResult.length} documents added`);


    } catch (error) {
        console.error("❌ Error occurred:", error);
    } finally {
        await mongoose.connection.close();
        console.log("\n🔌 Database connection closed");
    }
}

main();
