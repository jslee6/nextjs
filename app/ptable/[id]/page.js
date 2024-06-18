// import { useRouter } from "next/router";

// export default function Product() {
//     const router = useRouter();
//     const {id} = router.query;

//     return <div>Product{id} 페이지</div>;
//   }
  
export default function Product({ params }) {
    const { id } = params;
  
    return <div>Product {id} 페이지</div>;
  }
  

  // next js 13에서는 유즈라우트 안쓰고 파람스로 가져옴 증요 메모