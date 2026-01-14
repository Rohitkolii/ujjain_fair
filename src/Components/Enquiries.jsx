"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/stall-enquiry/firebase"; // adjust path
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const PAGE_SIZE = 5; // number of rows per page

export default function Enquiries() {
  const [stalls, setStalls] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "enquiries"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStalls(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtered stalls based on search
  const filteredStalls = stalls.filter(
    (stall) =>
      stall.companyName?.toLowerCase().includes(search.toLowerCase()) ||
      stall.contactPerson?.toLowerCase().includes(search.toLowerCase()) ||
      stall.phone?.toLowerCase().includes(search.toLowerCase()) ||
      stall.email?.toLowerCase().includes(search.toLowerCase()) ||
      stall.intrestedin?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredStalls.length / PAGE_SIZE);
  const paginatedStalls = filteredStalls.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Excel Download
  const handleDownload = () => {
    const worksheetData = stalls.map(
      ({ companyName, contactPerson, createdAt, email, intrestedin, message, phone }) => ({
        "Company Name": companyName,
        "Contact Person": contactPerson,
        "Phone": phone,
        "Email": email,
        "Interested In": intrestedin,
        "Message": message,
        "Created At": createdAt?.toDate ? createdAt.toDate().toLocaleString() : createdAt,
      })
    );

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Stalls");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "enquiries.xlsx");
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full md:w-3/4 lg:w-2/3">
        {/* Search + Download */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by company, contact, phone, email, or interest..."
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

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border shadow-sm bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-primary/10">
              <tr className="font-semibold text-gray-700">
                <th className="px-4 py-3">Company Name</th>
                <th className="px-4 py-3">Contact Person</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Interested In</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Created At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedStalls.map((stall) => (
                <tr key={stall.id} className="hover:bg-primary/5 transition text-sm">
                  <td className="px-4 py-3">{stall.companyName}</td>
                  <td className="px-4 py-3">{stall.contactPerson}</td>
                  <td className="px-4 py-3">{stall.phone}</td>
                  <td className="px-4 py-3">{stall.email}</td>
                  <td className="px-4 py-3">{stall.intrestedin}</td>
                  <td className="px-4 py-3">{stall.message}</td>
                  <td className="px-4 py-3">
                    {stall.createdAt?.toDate
                      ? stall.createdAt.toDate().toLocaleString()
                      : stall.createdAt}
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
