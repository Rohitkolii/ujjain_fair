"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/stall-enquiry/firebase"; // adjust path
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const PAGE_SIZE = 5; // rows per page

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts")); // your collection name
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchData();
  }, []);

  // Search filter
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(search.toLowerCase()) ||
      contact.email?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / PAGE_SIZE);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Excel download
  const handleDownload = () => {
    const worksheetData = contacts.map(
      ({ name, email, phone, message, createdAt }) => ({
        Name: name,
        Email: email,
        Phone: phone,
        Message: message,
        "Created At": createdAt?.toDate ? createdAt.toDate().toLocaleString() : createdAt,
      })
    );

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "contacts.xlsx");
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full md:w-3/4 lg:w-2/3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="border rounded px-4 py-2 flex-1"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
          >
            Download Excel
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border shadow-sm bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-primary/10">
              <tr className="font-semibold text-gray-700">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Created At</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {paginatedContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="hover:bg-primary/5 transition"
                >
                  <td className="px-4 py-3">{contact.name}</td>
                  <td className="px-4 py-3">{contact.email}</td>
                  <td className="px-4 py-3">{contact.phone}</td>
                  <td className="px-4 py-3">{contact.message}</td>
                  <td className="px-4 py-3">
                    {contact.createdAt?.toDate
                      ? contact.createdAt.toDate().toLocaleString()
                      : contact.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-primary text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
