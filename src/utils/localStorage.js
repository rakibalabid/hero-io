// ১. লোকাল স্টোরেজ থেকে ইনস্টল করা অ্যাপের লিস্ট পাওয়া
const getInstalledApps = () => {
    const storedAppsString = localStorage.getItem('installed-apps');
    if (storedAppsString) {
        return JSON.parse(storedAppsString);
    }
    return [];
};

// ২. নতুন অ্যাপ ইনস্টল (সেভ) করা
const addToStoredAppList = (app) => {
    const storedApps = getInstalledApps();
    const isExist = storedApps.find(item => item.id === app.id);

    if (!isExist) {
        storedApps.push(app);
        localStorage.setItem('installed-apps', JSON.stringify(storedApps));
        return true; 
    } else {
        return false; 
    }
};

// ৩. লিস্ট থেকে অ্যাপ মুছে ফেলা (Uninstall)
const removeFromStoredAppList = (id) => {
    const storedApps = getInstalledApps();
    const remainingApps = storedApps.filter(app => app.id !== id);
    localStorage.setItem('installed-apps', JSON.stringify(remainingApps));
};


export { addToStoredAppList, getInstalledApps, removeFromStoredAppList };