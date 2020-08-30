import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from "../../hooks/auth";

const DashBoard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut}></Button>
    </View>
  )
}

export default DashBoard;
