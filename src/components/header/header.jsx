import { Container } from "../container/container";

function Header() {
  return (
    <Container>
      <header className="flex justify-between py-4">
          <h1 className="font-medium text-slate-600"><span className="font-medium text-2xl text-blue-400">Evo</span> Academy</h1>
          <button></button>
      </header>
    </Container>
  );
}
export default Header;
