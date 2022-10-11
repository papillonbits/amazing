import { Link } from 'react-router-dom'
import { pageContent } from '../../../library/constant'

import { listShowPagePath, infoShowPagePath } from '../../../route/path'

export const navigation = {
  ariaAttr: {
    label: pageContent.listShow.contextNavigationItemText,
    current: 'page',
  },
  items: [
    {
      link: {
        component: Link,
        props: { ...{ to: listShowPagePath } },
        children: pageContent.listShow.contextNavigationItemText,
      },
      isSelected: true,
      enabled: true,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: infoShowPagePath } },
        children: pageContent.infoShow.contextNavigationItemText,
      },
      isSelected: false,
      enabled: true,
      visible: true,
    },
  ],
}
