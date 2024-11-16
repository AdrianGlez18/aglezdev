import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import ProjectContainer from './components/shared/layout/ProjectContainer'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Image, Link, ProjectContainer
  }
}