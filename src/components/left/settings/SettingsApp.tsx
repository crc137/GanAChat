/*
✨ CoonDev • https://dev.coonlink.com/

 ▄█▄    ████▄ ████▄    ▄   ██▄   ▄███▄      ▄
 █▀ ▀▄  █   █ █   █     █  █  █  █▀   ▀      █
 █   ▀  █   █ █   █ ██   █ █   █ ██▄▄   █     █
 █▄  ▄▀ ▀████ ▀████ █ █  █ █  █  █▄   ▄▀ █    █
 ▀███▀              █  █ █ ███▀  ▀███▀    █  █
                    █   ██                 █▐
                                           ▐
*/

import { APP_REVISION } from 'virtual:git-info'
import { memo } from '../../../lib/teact/teact'
import { getActions } from '../../../global'
import { SettingsScreens } from '../../../types'
import { FEEDBACK_URL } from '../../../config'
import useHistoryBack from '../../../hooks/useHistoryBack'
import useLastCallback from '../../../hooks/useLastCallback'
import Island, { IslandTitle } from '../../gili/layout/Island'
import ListItem from '../../ui/ListItem'
const logoUrl = '/logo.GanA.svg'
import styles from './SettingsApp.module.scss'
const APP_BRAND = 'GanA'
const APP_CHANNEL = 'coonlink'
const APP_CHAT = 'coondev'
const APP_WEBSITE_URL = 'https://gan-a.com/'
const APP_WEBSITE_LABEL = 'gan-a.com'
type OwnProps = { isActive?: boolean; onReset: () => void }

const SettingsApp = ({ isActive, onReset }: OwnProps) => {
  const { openSettingsScreen, openChatByUsername, openUrl } = getActions();
  useHistoryBack({ isActive, onBack: onReset });
  const handleOpenPlugins = useLastCallback(() => {openSettingsScreen({ screen: SettingsScreens.Plugins })})
  const handleOpenAppearance = useLastCallback(() => {openSettingsScreen({ screen: SettingsScreens.AppAppearance })})
  const handleOpenChats = useLastCallback(() => {openSettingsScreen({ screen: SettingsScreens.AppChats })})
  const handleOpenOther = useLastCallback(() => {openSettingsScreen({ screen: SettingsScreens.AppOther })})
  const handleOpenChannel = useLastCallback(() => {openChatByUsername({ username: APP_CHANNEL })})
  const handleOpenChat = useLastCallback(() => {openChatByUsername({ username: APP_CHAT })})
  const handleOpenSupport = useLastCallback(() => {openUrl({ url: FEEDBACK_URL })})
  const handleOpenWebsite = useLastCallback(() => {openUrl({ url: APP_WEBSITE_URL, shouldSkipModal: true })})

  return (
    <div className="settings-content custom-scroll">
      <div className={styles.header}>
        <div style="display: flex; align-items: center; justify-content: center; background-image: linear-gradient(45deg, rgb(146, 80, 162) 0%, rgb(146, 80, 162) 43.906%, rgb(99, 70, 145) 100%); width: 4.5rem; height: 4.5rem; border-radius: 1.125rem; object-fit: contain; margin-bottom: 0.75rem;">
          <img src={logoUrl} alt="Gan A" style="width: 3.5rem" draggable={false} />
        </div>
        <h2 className={styles.title}>{APP_BRAND}</h2>
        <p className={styles.version}>{`${APP_VERSION} (${APP_REVISION})`}</p>
      </div>

      <IslandTitle>Categories</IslandTitle>
      <Island>
        <ListItem icon="settings" narrow onClick={handleOpenAppearance}>Appearance</ListItem>
        <ListItem icon="message" narrow onClick={handleOpenChats}>Chats</ListItem>
        <ListItem icon="combine-craft" narrow onClick={handleOpenPlugins}>Plugins</ListItem>
        <ListItem icon="more" iconClassName={styles.rotateIcon} narrow onClick={handleOpenOther}>Other</ListItem>
      </Island>

      <IslandTitle>Links</IslandTitle>
      <Island>
        <ListItem icon="channel"narrow onClick={handleOpenChannel}rightElement={(<span className="settings-item__current-value">{`@${APP_CHANNEL}`}</span>)}>Channel</ListItem>
        <ListItem icon="group"narrow onClick={handleOpenChat}rightElement={(<span className="settings-item__current-value">{`@${APP_CHAT}`}</span>)}>Chat</ListItem>
        <ListItem icon="help"narrow onClick={handleOpenSupport}rightElement={<span className="settings-item__current-value">Support</span>}>Support</ListItem>
        <ListItem icon="web"narrow onClick={handleOpenWebsite}rightElement={<span className="settings-item__current-value">{APP_WEBSITE_LABEL}</span>}>Website</ListItem>
      </Island>
    </div>
  );
};

export default memo(SettingsApp);
