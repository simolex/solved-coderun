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

Function.prototype.clone = function () {
    var that = this;
    function newThat() {
        return new that(...arguments);
    }
    function __clone__() {
        if (this instanceof __clone__) {
            return newThat.apply(null, arguments);
        }
        return that.apply(this, arguments);
    }
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            __clone__[key] = this[key];
        }
    }
    return __clone__;
};

function extendTransportSystem(classEarth, classMoon) {
    const motherRoute = [];

    classEarth.prototype.transfer = function (parcel) {
        if (["object", "function"].includes(typeof parcel) && parcel !== null) {
            parcel.destination = "Earth";
            EarthRoute.vault.push(parcel);

            if (typeof parcel === "function") {
                newParcel = parcel.clone();
            } else {
                newParcel = JSON.parse(JSON.stringify(parcel));
            }
            newParcel.origin = parcel.destination;
            newParcel.destination = "Mothership";

            motherRoute.push(newParcel);
        }
    };

    classMoon.prototype.transfer = function (parcel) {
        if (["object", "function"].includes(typeof parcel) && parcel !== null) {
            parcel.destination = "Moon";
            MoonRoute.warehouse.push(parcel);

            if (typeof parcel === "function") {
                newParcel = parcel.clone();
            } else {
                newParcel = JSON.parse(JSON.stringify(parcel));
            }
            newParcel.origin = parcel.destination;
            newParcel.destination = "Mothership";

            motherRoute.push(newParcel);
        }
    };

    return motherRoute;
}

const mothershipStorage = extendTransportSystem(EarthRoute, MoonRoute);

const earthRoute1 = new EarthRoute();
const moonRoute2 = new MoonRoute();

earthRoute1.transfer({ content: 1232 });
earthRoute1.transfer(() => {});
moonRoute2.transfer({ text: "abc" });

console.log(mothershipStorage);
console.log(typeof MoonRoute);
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
