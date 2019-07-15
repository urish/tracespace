import {Action} from '../state'

export type WorkerMessageEvent = {data: Action}

export interface RenderWorker extends Worker {
  onmessage: (event: WorkerMessageEvent) => void
  postMessage(message: Action): void
}

export type RenderWorkerContext = {
  onmessage: (event: WorkerMessageEvent) => void
  postMessage(message: Action): void
}
