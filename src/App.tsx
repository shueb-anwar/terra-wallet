import * as React from 'react';
import { WalletStatus, useWallet } from '@terra-money/wallet-provider';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ConnectWalletMenu } from './components/ConnectWalletMenu';

import { ConnectedWalletMenu } from './components/ConnectedWalletMenu'
import { WalletTransactions } from './components/WalletTransactions';

export default function MenuAppBar() {
  const { status } = useWallet();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            5Percent
          </Typography>
          
          { status === WalletStatus.WALLET_CONNECTED ? <ConnectedWalletMenu /> : <ConnectWalletMenu /> }
        </Toolbar>
      </AppBar>

      {status === WalletStatus.WALLET_CONNECTED && ( <WalletTransactions /> )}
    </Box>
  );
}
