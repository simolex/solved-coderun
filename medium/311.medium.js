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

const extendTransportSystem = (classEarth, classMoon) => {
    const ea = classEarth;
    EarthRoute = new Proxy(ea, {
        construct(target, args) {
            console.log("Constract.....");

            return new Proxy(new target(...args), {
                get(t, args) {
                    console.log("fn=>", t);
                    console.log("args=>", args);
                    return true;
                },
            });
        },
    });
};

const mothershipStorage = extendTransportSystem(EarthRoute, MoonRoute);

const earthRoute1 = new EarthRoute();
const moonRoute2 = new MoonRoute();

earthRoute1.transfer({ content: 123 });
moonRoute2.transfer({ text: "abc" });

console.log("moth=>", mothershipStorage);
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
