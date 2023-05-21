//Types
type Setting = {
    displayName: string;
    technicalName: string;
    type: SettingTypes;
    attributes?: any;
    description: string;
    valueDisplayFunction?: (value: any) => any;
};

enum SettingTypes {
    boolean,
    slider,
    text,
    radio,
}

//Common functions
function convertToPercent(value: number) {
    return Math.round(value * 100) + "%";
}

function addUnitSuffix(value: number, word: string) {
    return value + " " + word + (Math.abs(value) > 1 ? "s" : "");
}

function booleanToYesNo(value: string) {
    return value === "True" ? "Yes" : "No";
}

//Exports
const settings: Setting[] = [
    {
        displayName: "Sounds volume",
        technicalName: "SoundsVolume",
        type: SettingTypes.slider,
        attributes: { min: 0, max: 1, step: 0.01 },
        description: "",
        valueDisplayFunction: convertToPercent,
    },
    {
        displayName: "Music volume",
        technicalName: "MusicVolume",
        type: SettingTypes.slider,
        attributes: { min: 0, max: 1, step: 0.01 },
        description: "",
        valueDisplayFunction: convertToPercent,
    },
    {
        displayName: "Visibility range",
        technicalName: "VisibilityRange",
        type: SettingTypes.text,
        attributes: { min: 0, max: undefined, step: 1 },
        description: "",
        valueDisplayFunction: (value) => addUnitSuffix(value, "block"),
    },
    {
        displayName: "Screen resolution",
        technicalName: "ResolutionMode",
        type: SettingTypes.radio,
        attributes: ["Low", "Medium", "High"],
        description: "",
    },
    {
        displayName: "Camera view angle",
        technicalName: "ViewAngleMode",
        type: SettingTypes.radio,
        attributes: ["Narrow", "Normal", "Wide"],
        description: "",
    },
    {
        displayName: "Sky rendering mode",
        technicalName: "SkyRenderingMode",
        type: SettingTypes.radio,
        attributes: ["Full", "NoClouds", "Disabled"],
        description: "",
    },
    {
        displayName: "Terrain mipmaps",
        technicalName: "TerrainMipmapsEnabled",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Object shadows",
        technicalName: "ObjectsShadowsEnabled",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Dark areas brightness",
        technicalName: "Brightness",
        type: SettingTypes.slider,
        attributes: { min: 0, max: 0, step: 0.01 },
        description: "",
        valueDisplayFunction: convertToPercent,
    },
    {
        displayName: "Show Ui in screenshots",
        technicalName: "ShowGuiInScreenshots",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Show logo in screenshots",
        technicalName: "ShowLogoInScreenshots",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Screenshot resolution",
        technicalName: "ScreenshotSize",
        type: SettingTypes.radio,
        attributes: ["FullHD", "ScreenSize"],
        description: "",
    },
    {
        displayName: "UI scale",
        technicalName: "UIScale",
        type: SettingTypes.slider,
        attributes: { min: 0.5, max: 1, step: 0.01 },
        description: "",
        valueDisplayFunction: convertToPercent,
    },
    {
        displayName: "Hide move/look pads",
        technicalName: "HideMoveLookPads",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Touchscreen move control",
        technicalName: "MoveControlMode",
        type: SettingTypes.radio,
        attributes: ["Touchpad", "Buttons"],
        description: "",
    },
    {
        displayName: "Touchscreen look control",
        technicalName: "LookControlMode",
        type: SettingTypes.radio,
        attributes: ["EntireScreen", "SpiltTouch", "TouchpadOnly"],
        description: "",
    },
    {
        displayName: "Left-handed layout",
        technicalName: "LeftHandedLayout",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Flip vertical axis",
        technicalName: "FlipVerticalAxis",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Move sensitivity",
        technicalName: "MoveSensitivity",
        type: SettingTypes.slider,
        attributes: { min: 0, max: 10, step: 0.01 },
        description: "",
    },
    {
        displayName: "Look sensitivity",
        technicalName: "LookSensitivity",
        type: SettingTypes.slider,
        attributes: { min: 0, max: 10, step: 0.01 },
        description: "",
    },
    {
        displayName: "Gamepad dead zone",
        technicalName: "GamepadDeadZone",
        type: SettingTypes.slider,
        attributes: { min: 0, max: 1, step: 0.01 },
        description: "",
    },
    {
        displayName: "Gamepad cursor speed",
        technicalName: "GamepadCursorSpeed",
        type: SettingTypes.text,
        attributes: { min: 0, max: undefined, step: 0.01 },
        description: "",
    },
    {
        displayName: "Creative mode dig speed",
        technicalName: "CreativeDigTime",
        type: SettingTypes.text,
        attributes: { min: 0, max: undefined, step: 0.01 },
        description: "",
    },
    {
        displayName: "Creative mode reach",
        technicalName: "CreativeReach",
        type: SettingTypes.slider,
        attributes: { min: 0, max: 20, step: 0.01 },
        description: "",
    },
    {
        displayName: "Minimum hold duration",
        technicalName: "MinimumHoldDuration",
        type: SettingTypes.text,
        attributes: { min: 0, max: undefined, step: 0.01 },
        description: "",
    },
    {
        displayName: "Minimum drag distance",
        technicalName: "MinimumDragDistance",
        type: SettingTypes.text,
        attributes: { min: 0, max: undefined, step: 1 },
        description: "",
    },
    {
        displayName: "Auto jump",
        technicalName: "AutoJump",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Horizontal creative flight",
        technicalName: "HorizontalCreativeFlight",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Community content",
        technicalName: "CommunityContentMode",
        type: SettingTypes.radio,
        attributes: ["Normal", "ShowAll", "Strict", "Disabled"],
        description: "",
    },
    {
        displayName: "Multithreaded terrain update",
        technicalName: "MultithreadedTerrainUpdate",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Display FPS counter",
        technicalName: "DisplayFpsCounter",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "Display FPS ribbon",
        technicalName: "DisplayFpsRibbon",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
    {
        displayName: "UI vertical flip",
        technicalName: "UpsideDownLayout",
        type: SettingTypes.boolean,
        description: "",
        valueDisplayFunction: booleanToYesNo,
    },
];

export default settings;
