"use client";

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "axios";

export default function SoftwareTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API에서 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/sw/get");
        setData(response.data); // 가져온 데이터를 상태에 저장
        setLoading(false);      // 로딩 상태 업데이트
      } catch (error) {
        setError(error.message); // 에러 발생 시 에러 메시지 저장
        setLoading(false);       // 로딩 상태 업데이트
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>License Key</TableCell>
            {/* 필요한 컬럼 추가 */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.licensKey}</TableCell>
              {/* 필요한 데이터 필드 추가 */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
