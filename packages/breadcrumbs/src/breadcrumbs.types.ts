import * as React from "react";

export interface BreadcrumbsProps {
  home: Crumb
  crumbs?: Crumb[]
  onCrumbClick?: (route: string) => void
  separator?: React.ReactNode
  type?: 'default' | 'alternative'
  withSpace?: boolean
  withEnter?: boolean
  classes?: {
    root?: string
    crumb?: string
  }
}

export type Crumb = {
  route: string
  label: React.ReactNode
  disabled?: boolean
}