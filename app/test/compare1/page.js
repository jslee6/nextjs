import Write from '@/app/writetest/page';

function PostBt() {
  const [post, setpost] = useState(false);

  const postButtonClick = () => {return setpost(true); };

// 해당함수가 눌러지면 단순히 ,setpost 가 트루값을 반환함 , state 로 기존에는 false를 가지고 있음

// // 애로우 말고 일반함수
//   function postButtonClick() {
//     setpost(true);
//   }
//   //
 

  return (
    <div>
      <Button
       variant="contained" 
       color="primary" 
       onClick={postButtonClick}>
        작성하기
        </Button>  
      {/* MUI 적용 */}
      {post && <Write />}
    </div>
  );
}
//  포스트 , writetest,  페이지 가져옴//
