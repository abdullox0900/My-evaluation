import { Container } from "../container/container";

function Footer() {
  return (
    <Container>
      <footer className="border-t-2">
        <div className="flex justify-between py-4">
          <p className="text-slate-400 font-medium">Version: 0.1</p>
          <p className="text-slate-400 font-medium">By: OneCode</p>
        </div>
      </footer>
    </Container>
  );
}
export default Footer;
