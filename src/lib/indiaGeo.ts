import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";

let cachedPromise: Promise<FeatureCollection> | null = null;

export function getIndiaGeographies(): Promise<FeatureCollection> {
  if (cachedPromise) return cachedPromise;

  cachedPromise = fetch("/india-states.json")
    .then(async (response) => response.json())
    .then((data) => {
      if (data?.type === "FeatureCollection") {
        return data as FeatureCollection;
      }

      if (data?.type === "Topology" && data.objects) {
        const objectKey = Object.keys(data.objects)[0];
        if (!objectKey) {
          throw new Error("Missing TopoJSON object key");
        }
        return feature(
          data,
          data.objects[objectKey],
        ) as unknown as FeatureCollection;
      }

      throw new Error("Unsupported map data format");
    })
    .catch((error) => {
      cachedPromise = null;
      throw error;
    });

  return cachedPromise;
}
