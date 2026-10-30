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

import type { ApiPeer } from './api/types'
import { isApiPeerUser } from './global/helpers/peers'
import { getMainUsername, isUserBot } from './global/helpers/users'
export const GANA_OFFICIAL_USERNAMES = ['coonlink', 'coondev']
export const GANA_OFFICIAL_BOT_TITLES = ['gan a']

function getPeerTitle(peer: ApiPeer) {
  if ('title' in peer) {return peer.title}
  return [peer.firstName, peer.lastName].filter(Boolean).join(' ')
}

export function isGanaOfficialPeer(peer: ApiPeer) {
  const username = getMainUsername(peer)
  if (username && GANA_OFFICIAL_USERNAMES.includes(username.toLowerCase())) {return true}
  if (isApiPeerUser(peer) && isUserBot(peer)) {const title = getPeerTitle(peer).toLowerCase()
  return GANA_OFFICIAL_BOT_TITLES.some((botTitle) => title.startsWith(botTitle))}
  return false
}
