// app/CustomLayout.js
export default function CustomLayout({ children }) {
    return (
      <div>
        <header>Custom Header</header>
        <main>{children}</main>
        <footer>Custom Footer</footer>
      </div>
    );
  }
  