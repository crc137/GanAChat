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

import { memo } from '../../../lib/teact/teact';

import useHistoryBack from '../../../hooks/useHistoryBack';

import Island from '../../gili/layout/Island';
import ListItem from '../../ui/ListItem';
type OwnProps = { isActive?: boolean; onReset: () => void };

const SettingsAppearance = ({ isActive, onReset }: OwnProps) => {
  useHistoryBack({ isActive, onBack: onReset });
  return (
    <div className="settings-content custom-scroll">
      <Island>
        <ListItem isStatic narrow>Here will be your appearance settings.</ListItem>
      </Island>
    </div>
  );
};

export default memo(SettingsAppearance);
