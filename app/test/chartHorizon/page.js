// app/test/chart2/page.js
// 가로 데이터
'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/material'; // MUI의 Box 컴포넌트 임포트

const Home = () => {
    const [data, setData] = useState([]); // 데이터 상태 초기화

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/sw/get'); // API 호출
                if (!response.ok) {
                    throw new Error('네트워크 응답이 좋지 않습니다.');
                }
                const result = await response.json();

                // SwName의 출현 횟수를 세기 위한 데이터 가공
                const companyCount = result.reduce((acc, item) => {
                    if (item.SwName) {
                        acc[item.SwName] = (acc[item.SwName] || 0) + 1; // 출현 횟수 세기
                    }
                    return acc;
                }, {});

                // 가공된 데이터를 배열로 변환
                const formattedData = Object.keys(companyCount).map(company => ({
                    SwName: company,
                    count: companyCount[company], // 각 SW의 출현 횟수
                }));

                // 출현 횟수를 기준으로 내림차순 정렬하고 상위 5개만 선택
                const top10Data = formattedData
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 5);

                setData(top10Data); // 상태 업데이트
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            }
        };

        fetchData(); // 데이터 가져오기 함수 호출
    }, []); // 컴포넌트가 마운트될 때만 실행

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <div style={{ fontSize: '30px' }}>차트 테스트</div>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="SwName" 
                        angle={0}  // 레이블을 기울임
                        textAnchor="end" // 레이블의 앵커를 끝으로 설정
                        height={200} // 높이를 조정하여 여유 공간 확보
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" /> {/* 출현 횟수를 막대로 표시 */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Home;

