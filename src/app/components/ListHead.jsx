import Link from "next/link";
import PropTypes from "prop-types";

export default function ListHead(props) {
  return (
    <li
      className={`${
        props.active ? "text-black px-4 py-3 md:p-4" : "text-white"
      } md:text-lg font-medium`}
    >
      <Link href={"/"}>{props.title}</Link>
    </li>
  );
}

ListHead.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
