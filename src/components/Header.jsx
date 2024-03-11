import { Navbar, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <div className="flex items-center">
          <img
            src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/mcaq4nwlbrqnulpfj1ao"
            alt=""
            height="30"
            width="30"
          />
          <h1 className="ml-2">Userology</h1>
        </div>
      </Link>
      <form className="hidden lg:inline">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/cart">Cart</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/platform">Platform</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/resources">Resources</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="#">
            <Button gradientDuoTone="purpleToBlue" outline>
              Book a Demo
            </Button>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
