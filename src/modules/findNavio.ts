import { navios } from "../index.js";

export function findNavio(name: string): any {
    let navio: {
      name: string,
      capitain: string,
      crewLimit: number,
      crew: string[],
      inMission: boolean
    }
    
    navio = navios.find((ship) => {
      return ship.name === name
    })
  
    return navio
  }