interface SyncService {
	sync(syncData: SyncData): Promise<SyncResult>;
}