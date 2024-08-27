export default function Details({ params }) {
    const { id } = params;
  
    return (
      <div>
        <h1>Details for ID: {id}</h1>
        {/* 이곳에 id에 따른 상세 정보를 표시 */}
      </div>
    );
  }
  