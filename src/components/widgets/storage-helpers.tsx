"use client";

import { Button } from "@/ui";

import {
  setLocal,
  getLocal,
  removeLocal,
  setSession,
  getSession,
  removeSession,
  setCookie,
  getCookie,
  removeCookie,
} from "@/helpers";

export function StorageHelpers() {
  return (
    <section className="flex w-full flex-col gap-2 pt-6">
      <h2 className="font-medium">Storage Helpers</h2>

      <div className="grid grid-cols-3 gap-2">
        <Button variant="secondary" onClick={() => setLocal("name", "Ömer")}>
          setLocal(name=Ömer)
        </Button>
        <Button variant="secondary" onClick={() => alert(getLocal("name"))}>
          getLocal(name)
        </Button>
        <Button variant="secondary" onClick={() => removeLocal("name")}>
          removeLocal(name)
        </Button>

        <Button
          variant="secondary"
          onClick={() => setSession("arr", [1, 2, 3])}
        >
          setSession(arr=[1,2,3])
        </Button>
        <Button variant="secondary" onClick={() => alert(getSession("arr"))}>
          getSession(arr)
        </Button>
        <Button variant="secondary" onClick={() => removeSession("arr")}>
          removeSession(arr)
        </Button>

        <Button variant="secondary" onClick={() => setCookie("year", 1453, 1)}>
          setCookie(year=1453)
        </Button>
        <Button variant="secondary" onClick={() => alert(getCookie("year"))}>
          getCookie(year)
        </Button>
        <Button variant="secondary" onClick={() => removeCookie("year")}>
          removeCookie(year)
        </Button>
      </div>
    </section>
  );
}
