import '../../index.css'
import { ClientOnly } from './client'
export function generateStaticParams() {
  return [
    { slug: [] },          // This represents the root path "/"
    { slug: ["agones"] },   // Example: "/about" // Example: "/blog/1"
    { slug: ["stepup"] },   // Example: "/about" // Example: "/blog/1"
    { slug: ["/favicon.ico"] },   // Example: "/about" // Example: "/blog/1"
  ];
}
 
export default function Page() {
  return <ClientOnly/>
}