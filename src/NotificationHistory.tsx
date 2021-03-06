import { pipe } from 'fp-ts/function';
import * as React from 'react';

import { Applicative } from 'molecule/dist/atom-fpts'
import { sequenceT } from 'fp-ts/Apply';
import { notificationCount, notifications } from './notifications';
import { makeAtom, map } from 'molecule/dist/atom';
import { useAtom } from 'molecule/dist/atom-react';
import { Eq } from 'fp-ts/lib/string';
import { clickCount, incrementClickCount } from './clickCount';

const messageM = pipe(
  sequenceT(Applicative)(clickCount, notificationCount),
  map(([clicks, notifs]) => `You have clicked ${clicks} times and ${notifs} total notifications have been added`)
)

export const NotificationHistory = () => {
  const message = useAtom(messageM, Eq)
  
  return <><div>{message}</div><button onClick={incrementClickCount}>add click</button></>
}
