function PostBt() {
    const [post, setpost] = useState(false);
  
    const handlePostButtonClick = () => {
      setpost((prevState) => !prevState);
    };
  
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePostButtonClick}
        >
          {post ? '닫기' : '작성하기'}
        </Button>
        {post && <Write />}
      </div>
    );
  }