import { localGithubUser } from 'types';
import styles from './UserInfo.module.scss';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

import { ReactComponent as IconCompany } from 'assets/icon-company.svg'
import { ReactComponent as IconLocation } from 'assets/icon-location.svg'
import { ReactComponent as IconTwitter } from 'assets/icon-twitter.svg'
import { ReactComponent as IconWebsite } from 'assets/icon-website.svg'
import { text } from 'stream/consumers';

interface UserInfoProps extends Pick<localGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {

}

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation />,
      text: location,
    },
    {
      icon: <IconCompany />,
      text: company,
    },
    {
      icon: <IconTwitter />,
      text: twitter,
      isLink: true,
    },
    {
      icon: <IconWebsite />,
      text: blog,
      isLink: true,
    }
  ]

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => <InfoItem {...item} key={index} />)}
    </div>
  );
}
