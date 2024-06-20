//따로 빼보고 싶음

<Dialog open={open} onClose={() => setOpen(false)}>
<DialogTitle>사용자 정보 수정</DialogTitle>
<DialogContent>
    {/* 필드시작 */}

    
  <TextField
    name="firstName"
    label="First Name"
    value={selectedUser?.firstName || ''}
    onChange={handleInputChange}
    margin="normal"
  />
  <TextField
    name="lastName"
    label="Last Name"
    value={selectedUser?.lastName || ''}
    onChange={handleInputChange}
    margin="normal"
  />
  <TextField
    name="email"
    label="Email"
    value={selectedUser?.email || ''}
    onChange={handleInputChange}
    margin="normal"
  />
  <TextField
    name="age"
    label="Age"
    value={selectedUser?.age || ''}
    onChange={handleInputChange}
    margin="normal"
  />
  <TextField
    name="address"
    label="Address"
    value={selectedUser?.address || ''}
    onChange={handleInputChange}
    margin="normal"
  />  

  {/* 필드끝 */}


</DialogContent>

    {/* // 저장 삭제 버튼 */}
<DialogActions>
  <Button onClick={() => setOpen(false)}>Cancel</Button>
  <Button onClick={handleSaveUpdate} color="primary">
    Save
  </Button>
</DialogActions>
{/* // 저장 삭제 버튼 */}

</Dialog>