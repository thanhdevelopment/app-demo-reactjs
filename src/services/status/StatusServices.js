const status = [
    {
        "Id": "Cancelled",
        "Name": "Cancelled",
        "Checked": false,
        "DefaultChecked": false
    },
    {
        "Id": "Draft",
        "Name": "Draft",
        "Checked": true,
        "DefaultChecked": true
    },
    {
        "Id": "With_Pickup",
        "Name": "With_Pickup",
        "Checked": true,
        "DefaultChecked": true
    },
    {
        "Id": "Printed",
        "Name": "Printed",
        "Checked": true,
        "DefaultChecked": true
    }
];

export const getListStatus = (keyword) => {
    let _status = [];
    _status = !keyword ? status : status.filter(x => x.Name.startsWith(keyword));
    return Promise.resolve().then(result => _status);
};

export const selectStatusById = (Id) => {
    const item = status.find(x => x.Id === Id);
    if (item) item["Checked"] = !item.Checked;
    return Promise.resolve().then(result => status);
}

export const refreshListStatus = () => {
    status.map(item => item.Checked = item.DefaultChecked);
    return Promise.resolve().then(result => status);
}
