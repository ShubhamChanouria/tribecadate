import Footer from "../components/Layout/Footer/Footer";
export default function PageLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />  
    </div>
  );
}
