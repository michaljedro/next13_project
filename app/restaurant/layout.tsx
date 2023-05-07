import Header from "../components/Header";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-screen-2xl m-auto bg-white">
      <Header />
      {children}
    </main>
  );
}

export default layout;
