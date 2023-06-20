import { ActionPanel, List, Action, Icon, Color } from "@raycast/api";
import { iDevice, SOC, devices, socs, device_id } from "./devices";
import React, { useState } from "react";

export default function Command() {
  return <ListDevices />;
}

function ListDevices() {
  const [filter, setFilter] = useState("all");
  const deviceTypes: { [kind: string]: Array<iDevice> } = {};
  for (const dev of Object.values(devices)) {
    if (deviceTypes[dev.kind] === undefined) {
      deviceTypes[dev.kind] = [];
    }
    deviceTypes[dev.kind].push(dev);
  }
  const [showingDetail, setDetail] = useState(false);
  const toggleDetail = () => {
    setDetail(!showingDetail);
  };
  const [searchText, setSearchText] = useState<string | undefined>("");

  return (
    <List
      searchBarAccessory={FilterBox(
        deviceTypes,
        (newVal) => {
          setFilter(newVal);
        },
        filter
      )}
      searchText={searchText}
      filtering={{ keepSectionOrder: true }}
      isShowingDetail={showingDetail}
      onSearchTextChange={(text) => {
        setSearchText(text);
      }}
    >
      {Object.entries(deviceTypes)
        .filter(([kind]) => kind.toLowerCase() == filter || filter == "all" || filter == "devices")
        .map(([kind, devices]) => (
          <List.Section key={kind} title={kind}>
            {devices.map((dev) => DeviceListItem(dev, showingDetail, toggleDetail, setSearchText))}
          </List.Section>
        ))}
      {filter == "all" || filter == "socs" ? (
        <List.Section title="SOCs">
          {Object.values(socs).map((soc) => SOCListItem(soc, showingDetail, toggleDetail, setSearchText))}
        </List.Section>
      ) : (
        <></>
      )}
    </List>
  );
}

function FilterBox(
  deviceTypes: { [kind: string]: Array<iDevice> },
  callback: (newVal: string) => void,
  value?: string
) {
  return (
    <List.Dropdown placeholder="Filter kind" tooltip="Filter kind" onChange={callback} value={value}>
      <List.Dropdown.Item title="All" value="all" />
      <List.Dropdown.Section>
        <List.Dropdown.Item title="SOCs" value="socs" />
        <List.Dropdown.Item title="Devices" value="devices" />
      </List.Dropdown.Section>
      <List.Dropdown.Section>
        {Object.keys(deviceTypes).map((element) => (
          <List.Dropdown.Item title={element} value={element.toLowerCase()} />
        ))}
      </List.Dropdown.Section>
    </List.Dropdown>
  );
}

// function DeviceListSection(kind: string, devices: Array<iDevice>) {
//   return (
//     <List.Section key={kind} title={kind}>
//       {devices.map((dev) => DeviceListItem(dev, toggleDetail))}
//     </List.Section>
//   );
// }

function DeviceListItem(
  dev: iDevice,
  showingDetail: boolean,
  toggleDetail: () => void,
  setSearch: (s: string) => void
) {
  return (
    <List.Item
      accessories={
        showingDetail
          ? undefined
          : [
              { text: dev.internal_name },
              { tag: { value: dev.soc.name, color: Color.PrimaryText }, icon: Icon.ComputerChip },
            ]
      }
      icon={{ source: `devices/${device_id(dev)}.png` }}
      keywords={[
        dev.internal_name,
        dev.kind,
        `${dev.kind}`,
        `${dev.product_number[0]},${dev.product_number[1]}`,
        dev.soc.name,
        `@id:${device_id(dev)}@`,
        `@soc:${dev.soc.name}@`,
      ]}
      key={dev.internal_name}
      title={dev.product_name}
      subtitle={device_id(dev)}
      detail={DeviceDetail(dev)}
      actions={
        <ActionPanel>
          <Action title="Toggle Details" icon={Icon.Info} onAction={toggleDetail} />
          <Action title="Show SOC" icon={Icon.Info} onAction={() => setSearch(dev.soc.name + " soc")} />
        </ActionPanel>
      }
    />
  );
}

function DeviceDetail(device: iDevice) {
  return (
    <List.Item.Detail
      markdown={`# ${device.product_name}
![${device.product_name}](devices/${device_id(device)}.png)`}
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title="Device Type" text={device.kind} />
          <List.Item.Detail.Metadata.Label title="Internal Name" text={device.internal_name} />
          <List.Item.Detail.Metadata.Label title="Device ID" text={device_id(device)} />
          <List.Item.Detail.Metadata.Label title="First iOS version" text={device.first_ios_version} />
          <List.Item.Detail.Metadata.Separator />
          <List.Item.Detail.Metadata.Label title="SOC" text={device.soc.name} />
        </List.Item.Detail.Metadata>
      }
    />
  );
}

function SOCListItem(soc: SOC, showingDetail: boolean, toggleDetail: () => void, setSearch: (s: string) => void) {
  return (
    <List.Item
      accessories={showingDetail ? undefined : [{ text: soc.platform }]}
      icon={Icon.ComputerChip}
      keywords={[soc.platform, soc.name, soc.cpid, "soc", "chip "]}
      title={soc.name}
      detail={SOCDetails(soc)}
      actions={
        <ActionPanel>
          <Action title="Toggle Details" icon={Icon.Info} onAction={toggleDetail} />
          <Action title="Show Devices" icon={Icon.Info} onAction={() => setSearch("@soc:" + soc.name + "@")} />
        </ActionPanel>
      }
    />
  );
}

function SOCDetails(soc: SOC) {
  return (
    <List.Item.Detail
      metadata={
        <List.Item.Detail.Metadata>
          <List.Item.Detail.Metadata.Label title="Code" text={soc.platform} />
          <List.Item.Detail.Metadata.Label title="Codename" text={soc.codename} />
          <List.Item.Detail.Metadata.Label title="CHIP ID" text={soc.cpid} />
          <List.Item.Detail.Metadata.Label title="Architecture" text={soc.is_64bit ? "A64" : "A32"} />
          <List.Item.Detail.Metadata.Label title="Release date" text={soc.release} />
        </List.Item.Detail.Metadata>
      }
    />
  );
}
