import { ref } from "vue";
import { ResponseCode } from "@/config/constans";
import router from "@/router";
import { exitDeviceActivity, deleteDevice } from "@/hoLink";
import { showToast } from "vant";
import { jumpLegalInformation } from "@/hoLink";

export const deleteDialogShow = ref(false);
export const modDevNameDialogShow = ref(false);
export const newDevName = ref("");
export const roomDialogShow = ref(false);
export const newRoomId = ref("");
export const newRoomName = ref("");
const roomList = ref<any[]>([]);

export const initData = (data: any) => {
  roomList.value = data;
};

export const options = [
  [
    {
      title: "设备名称",
      valueKey: "name",
      isLink: true,
      click: (oldDevName: any) => {
        modDevNameDialogShow.value = true;
        newDevName.value = oldDevName;
      },
    },
    {
      title: "所属空间",
      valueKey: "roomName",
      isLink: true,
      click: (oldRoomName: any) => {
        roomDialogShow.value = true;
        newRoomName.value = oldRoomName;
        newRoomId.value = roomList.value.find(
          ({ roomName }) => roomName === oldRoomName
        )?.roomId;
      },
    },
  ],
  [
    {
      title: "设备信息",
      isLink: true,
      click: () => {
        router.push({ path: "/devInfo" });
      },
    },
    {
      title: "设备网络信息",
      isLink: true,
      click: () => {
        router.push({ path: "/netInfo" });
      },
    },
    {
      title: "开源代码协议",
      isLink: true,
      click: () => {
        console.log("点击开源代码协议");
      },
    },
    {
      title: "法律信息",
      isLink: true,
      click: () => {
        try {
          jumpLegalInformation(
            "https://contentplatform-drcn.hihonorcdn.com/HCEP/deviceweb/protocol/index.html#/home"
          );
        } catch (e) {
          showToast("error" + JSON.stringify(e));
        }
      },
    },
  ],
  [
    {
      title: "删除设备",
      isLink: true,
      click: () => {
        deleteDialogShow.value = true;
      },
    },
  ],
];

// 设置名称输入框关闭前
export const devNameDialogBeforeClose = (action: string) => {
  if (action === "confirm" && modDevNameDialogShow.value) {
    return false;
  }
};

export const onDeleteDevice = async () => {
  try {
    const res = await deleteDevice();
    if (res.status === ResponseCode.SUCCESS) {
      await exitDeviceActivity();
    }
  } catch (e) {
    console.error(e);
  }
};

export const onModRoomCancel = () => {
  roomDialogShow.value = false;
  newRoomId.value = "";
};
export const handleModRoom = (roomId: string) => {
  newRoomId.value = roomId;
};
