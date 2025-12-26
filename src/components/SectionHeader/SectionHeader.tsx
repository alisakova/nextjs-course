import styles from './sectionHeader.module.css'
import Link, { LinkProps } from 'next/link'

interface SectionHeaderProps {
  title: string
  allLink?: LinkProps['href']
}

export const SectionHeader = ({ title, allLink }: SectionHeaderProps) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {allLink && (
        <Link href={allLink} className={styles.link}>
          Все &#8599;
        </Link>
      )}
    </div>
  )
}
