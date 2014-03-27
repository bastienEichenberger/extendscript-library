/*
 * Performance metric options.
 */
var PerformanceMetricOptions = {
  /*
   * The CPU time.
   * @type {Number}
   */
  CPU_TIME: undefined,
  
  /*
   * The number of threads.
   * @type {Number}
   */
  NUMBER_OF_THREADS: undefined,
  
  /*
   * The overall system CPU.
   * @type {Number}
   */
  OVERALL_SYSTEM_CPU: undefined,
  
  /*
   * The overall user CPU.
   * @type {Number}
   */
  OVERALL_USER_CPU: undefined,
  
  /*
   * The core allocation count.
   * @type {Number}
   */
  CORE_ALLOCATION_COUNT: undefined,
  
  /*
   * The core memory size.
   * @type {Number}
   */
  CORE_MEMORY_SIZE: undefined,
  
  /*
   * The resident memory size.
   * @type {Number}
   */
  RESIDENT_MEMORY_SIZE: undefined,
  
  /*
   * The virtual memory size.
   * @type {Number}
   */
  VIRTUAL_MEMORY_SIZE: undefined,
  
  /*
   * The current memory mark.
   * @type {Number}
   */
  CURRENT_MEMORY_MARK: undefined,
  
  /*
   * The handle count.
   * @type {Number}
   */
  HANDLE_COUNT: undefined,
  
  /*
   * The GDI object count.
   * @type {Number}
   */
  GDI_OBJECT_COUNT: undefined,
  
  /*
   * heap allocations
   * @type {Number}
   */
  HEAP_ALLOCATIONS: undefined,
  
  /*
   * heap allocations peak
   * @type {Number}
   */
  HEAP_ALLOCATIONS_PEAK: undefined,
  
  /*
   * memory purge count
   * @type {Number}
   */
  MEMORY_PURGE_COUNT: undefined,
  
  /*
   * memory purge time
   * @type {Number}
   */
  MEMORY_PURGE_TIME: undefined,
  
  /*
   * BIB Allocations
   * @type {Number}
   */
  BIB_ALLOCATIONS: undefined,
  
  /*
   * BIB Allocations peak
   * @type {Number}
   */
  BIB_ALLOCATIONS_PEAK: undefined,
  
  /*
   * BIB cache
   * @type {Number}
   */
  BIB_CACHE: undefined,
  
  /*
   * BIB cache peak
   * @type {Number}
   */
  BIB_CACHE_PEAK: undefined,
  
  /*
   * PDF allocactions
   * @type {Number}
   */
  PDF_ALLOCACTIONS: undefined,
  
  /*
   * PDF allocactions peak
   * @type {Number}
   */
  PDF_ALLOCACTIONS_PEAK: undefined,
  
  /*
   * image cache allocations
   * @type {Number}
   */
  IMAGE_CACHE_ALLOCATIONS: undefined,
  
  /*
   * image cache allocations peak
   * @type {Number}
   */
  IMAGE_CACHE_ALLOCATIONS_PEAK: undefined,
  
  /*
   * image cache file bytes read
   * @type {Number}
   */
  IMAGE_CACHE_FILE_BYTES_READ: undefined,
  
  /*
   * image cache file bytes written
   * @type {Number}
   */
  IMAGE_CACHE_FILE_BYTES_WRITTEN: undefined,
  
  /*
   * image cache file read time
   * @type {Number}
   */
  IMAGE_CACHE_FILE_READ_TIME: undefined,
  
  /*
   * image cache file write time
   * @type {Number}
   */
  IMAGE_CACHE_FILE_WRITE_TIME: undefined,
  
  /*
   * VXferAlloc
   * @type {Number}
   */
  VXFERALLOC: undefined,
  
  /*
   * VXferAllocPeak
   * @type {Number}
   */
  VXFERALLOCPEAK: undefined,
  
  /*
   * VXferBytesRead
   * @type {Number}
   */
  VXFERBYTESREAD: undefined,
  
  /*
   * VXferBytesWritten
   * @type {Number}
   */
  VXFERBYTESWRITTEN: undefined,
  
  /*
   * VXferReadTime
   * @type {Number}
   */
  VXFERREADTIME: undefined,
  
  /*
   * VXferWriteTime
   * @type {Number}
   */
  VXFERWRITETIME: undefined,
  
  /*
   * VXferFileBytesRead
   * @type {Number}
   */
  VXFERFILEBYTESREAD: undefined,
  
  /*
   * VXFerFileBytesWritten
   * @type {Number}
   */
  VXFERFILEBYTESWRITTEN: undefined,
  
  /*
   * process IO bytes read
   * @type {Number}
   */
  PROCESS_IO_BYTES_READ: undefined,
  
  /*
   * process IO bytes written
   * @type {Number}
   */
  PROCESS_IO_BYTES_WRITTEN: undefined,
  
  /*
   * AGMXShowTime
   * @type {Number}
   */
  AGMXSHOWTIME: undefined,
  
  /*
   * database file bytes read
   * @type {Number}
   */
  DATABASE_FILE_BYTES_READ: undefined,
  
  /*
   * database file bytes written
   * @type {Number}
   */
  DATABASE_FILE_BYTES_WRITTEN: undefined,
  
  /*
   * database file read time
   * @type {Number}
   */
  DATABASE_FILE_READ_TIME: undefined,
  
  /*
   * database file write time
   * @type {Number}
   */
  DATABASE_FILE_WRITE_TIME: undefined,
  
  /*
   * drop shadow memory read time
   * @type {Number}
   */
  DROP_SHADOW_MEMORY_READ_TIME: undefined,
  
  /*
   * drop shadow memory read bytes
   * @type {Number}
   */
  DROP_SHADOW_MEMORY_READ_BYTES: undefined,
  
  /*
   * drop shadow memory write time
   * @type {Number}
   */
  DROP_SHADOW_MEMORY_WRITE_TIME: undefined,
  
  /*
   * drop shadow memory write bytes
   * @type {Number}
   */
  DROP_SHADOW_MEMORY_WRITE_BYTES: undefined,
  
  /*
   * drop shadow file read time
   * @type {Number}
   */
  DROP_SHADOW_FILE_READ_TIME: undefined,
  
  /*
   * drop shadow file read bytes
   * @type {Number}
   */
  DROP_SHADOW_FILE_READ_BYTES: undefined,
  
  /*
   * drop shadow file write time
   * @type {Number}
   */
  DROP_SHADOW_FILE_WRITE_TIME: undefined,
  
  /*
   * drop shadow file write bytes
   * @type {Number}
   */
  DROP_SHADOW_FILE_WRITE_BYTES: undefined,
  
  /*
   * change manager update call count
   * @type {Number}
   */
  CHANGE_MANAGER_UPDATE_CALL_COUNT: undefined,
  
  /*
   * change manager update call time
   * @type {Number}
   */
  CHANGE_MANAGER_UPDATE_CALL_TIME: undefined,
  
  /*
   * snapshot count
   * @type {Number}
   */
  SNAPSHOT_COUNT: undefined,
  
  /*
   * galley composition time
   * @type {Number}
   */
  GALLEY_COMPOSITION_TIME: undefined,
  
  /*
   * layout composition time
   * @type {Number}
   */
  LAYOUT_COMPOSITION_TIME: undefined,
  
  /*
   * galley composition count
   * @type {Number}
   */
  GALLEY_COMPOSITION_COUNT: undefined,
  
  /*
   * layout composition count
   * @type {Number}
   */
  LAYOUT_COMPOSITION_COUNT: undefined,
  
  /*
   * draw manager draw time
   * @type {Number}
   */
  DRAW_MANAGER_DRAW_TIME: undefined,
  
  /*
   * draw manager number of interrupts
   * @type {Number}
   */
  DRAW_MANAGER_NUMBER_OF_INTERRUPTS: undefined,
  
  /*
   * snapshot read write time
   * @type {Number}
   */
  SNAPSHOT_READ_WRITE_TIME: undefined,
  
  /*
   * new snapshot time
   * @type {Number}
   */
  NEW_SNAPSHOT_TIME: undefined,
  
  /*
   * database new UID count
   * @type {Number}
   */
  DATABASE_NEW_UID_COUNT: undefined,
  
  /*
   * database instantiate count
   * @type {Number}
   */
  DATABASE_INSTANTIATE_COUNT: undefined,
  
  /*
   * instance cache purge count
   * @type {Number}
   */
  INSTANCE_CACHE_PURGE_COUNT: undefined,
  
  /*
   * minisave count
   * @type {Number}
   */
  MINISAVE_COUNT: undefined,
  
  /*
   * XMP filter time
   * @type {Number}
   */
  XMP_FILTER_TIME: undefined,
  
  /*
   * snapshot read write byte count
   * @type {Number}
   */
  SNAPSHOT_READ_WRITE_BYTE_COUNT: undefined,
  
  /*
   * database file page reads
   * @type {Number}
   */
  DATABASE_FILE_PAGE_READS: undefined,
  
  /*
   * Number of attachable events that have been dispatched.
   * @type {Number}
   */
  ATTACHABLE_EVENT_COUNT: undefined,
  
  /*
   * Number of attached scripts that have been executed.
   * @type {Number}
   */
  ATTACHED_SCRIPTS_COUNT: undefined,
  
  /*
   * Total amount of time spent dispatching attachable events.
   * @type {Number}
   */
  DISPATCH_EVENT_TIME: undefined,
  
};
