import React from "react";
import { ListRenderItemInfo, StyleSheet } from "react-native";
import { List, ListItem, ListItemElement, Toggle } from "@ui-kitten/components";
import { ListItemModel } from "../model/list-item.model";
import {ThemeContext} from '../app/theme-context';

const data: any[] = [];

data.push({
  title: "Dark mode",
  description: null,
});

export default function SettingsScreen() {

  const themeContext = React.useContext(ThemeContext);
  const [activeChecked, setActiveChecked] = React.useState(themeContext.isDarkTheme);

  const onActiveCheckedChange = (isChecked: boolean) => {
    setActiveChecked(isChecked);
    themeContext.toggleDark();
  };

  const renderItemAccessory = () => (
    <Toggle checked={activeChecked} onChange={onActiveCheckedChange} />
  );

  const renderItem = (
    info: ListRenderItemInfo<ListItemModel>
  ): ListItemElement => (
    <ListItem
      title={info.item.title}
      description={info.item.description || ""}
      accessoryRight={renderItemAccessory}
    />
  );

  return <List data={data} renderItem={renderItem} />;
}

const styles = StyleSheet.create({});
