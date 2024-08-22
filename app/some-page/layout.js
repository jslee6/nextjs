// app/some-page/layout.js
import MyLayout from "../components/MyLayout";

const SomePageLayout = ({ children }) => {
  return <MyLayout>{children}</MyLayout>;
};

export default SomePageLayout;
