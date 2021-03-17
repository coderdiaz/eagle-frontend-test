import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} border-l-2 border-indigo-100 bg-gray-400 text-indigo-100 bg-opacity-10`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}