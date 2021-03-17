import React from "react";
import NextLink from "next/link";
import { useRouter } from 'next/router'

const Link = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} border-l-2 border-indigo-100 bg-gray-400 text-indigo-100 bg-opacity-10`;
  }

  return <NextLink href={href}>{React.cloneElement(children, { className })}</NextLink>;
}

export default Link;
