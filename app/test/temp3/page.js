'use client'

import * as React from 'react';
import { Box, Container, Divider, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function TestLayout() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh', // 전체 화면을 차지하도록 설정
      }}
    >
      <Box
        sx={{
          width: '100%',
          border: '1px solid #ccc', // 테두리 스타일 추가
          padding: '16px', // 내부 여백 추가
        }}
      >
        {/* 왼쪽 부분의 내용 */}
        <h2>왼쪽 부분</h2>
        <p>왼쪽 부분의 내용입니다.</p>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box
        sx={{
          width: '100%',
          border: '1px solid #ccc', // 테두리 스타일 추가
          padding: '16px', // 내부 여백 추가
        }}
      >
        {/* 오른쪽 부분의 내용 */}
        <h2>오른쪽 부분</h2>
        <p>오른쪽 부분의 내용입니다.</p>
      </Box>
    </Container>
  );
}
