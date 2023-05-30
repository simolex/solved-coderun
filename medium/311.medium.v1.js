class EarthRoute {
    static vault = [];
    transfer(parcel) {
        parcel.destination = "Earth";
        EarthRoute.vault.push(parcel);
    }
}

class MoonRoute {
    static warehouse = [];
    transfer(parcel) {
        parcel.destination = "Moon";
        MoonRoute.warehouse.push(parcel);
    }
}

function extendTransportSystem(classEarth, classMoon) {
    const matherRoute = [];
    EarthRoute = new Proxy(classEarth, {
        construct(target, args) {
            return new Proxy(new target(...args), {
                get(obj, prop) {
                    if (typeof obj[prop] === "function" && prop === "transfer") {
                        return (...argsFn) => {
                            const transferArgs = argsFn[0];
                            if (
                                typeof transferArgs === "object" &&
                                transferArgs !== null &&
                                !Array.isArray(transferArgs)
                            ) {
                                const newParcel = JSON.parse(JSON.stringify(transferArgs));
                                const result = obj[prop].apply(obj, argsFn);

                                newParcel.origin = transferArgs.destination;
                                newParcel.destination = "Mothership";

                                matherRoute.push(newParcel);
                                return result;
                            }
                            return;
                        };
                    }
                    return Reflect.get(obj, prop);
                }
            });
        }
    });

    MoonRoute = new Proxy(classMoon, {
        construct(target, args) {
            return new Proxy(new target(...args), {
                get(obj, prop) {
                    if (typeof obj[prop] === "function" && prop === "transfer") {
                        return (...argsFn) => {
                            const transferArgs = argsFn[0];
                            if (
                                typeof transferArgs === "object" &&
                                transferArgs !== null &&
                                !Array.isArray(transferArgs)
                            ) {
                                const newParcel = JSON.parse(JSON.stringify(transferArgs));
                                const result = obj[prop].apply(obj, argsFn);

                                newParcel.origin = transferArgs.destination;
                                newParcel.destination = "Mothership";

                                matherRoute.push(newParcel);
                                return result;
                            }
                            return;
                        };
                    }
                    return Reflect.get(obj, prop);
                }
            });
        }
    });

    matherRoute.__proto__.transfer = function (parcel) {
        if (typeof parcel === "object" && parcel !== null && !Array.isArray(parcel)) {
            parcel.origin = parcel.destination;
            parcel.destination = "Mothership";
            this.push(parcel);
        }
    };

    return matherRoute;
}

const mothershipStorage = extendTransportSystem(EarthRoute, MoonRoute);

const earthRoute1 = new EarthRoute();
const moonRoute2 = new MoonRoute();

earthRoute1.transfer({ q: 11 }, { q: 22 });
earthRoute1.transfer({ content: 1233 });
moonRoute2.transfer({ text: "abc" });

mothershipStorage.transfer({ q: "1", destination: "WWe" });

console.log(mothershipStorage);
/* [
 *   { content: 123, origin: 'Earth', destination: 'Mothership' },
 *   { text: 'abc', origin: 'Moon', destination: 'Mothership' }
 * ]
 */

console.log(EarthRoute.vault);
/* [
 *   { content: 123, destination: 'Earth' }
 * ]
 */

console.log(MoonRoute.warehouse);
/* [
 *   { text: 'abc', destination: 'Moon' }
 * ]
 */
