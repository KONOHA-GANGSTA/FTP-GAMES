import { Card, Skeleton } from "@mui/material";
import styles from "./CardSkeleton.module.css";

export const CardSkeleton = () => {
  return (
    <Card className={styles.image}>
      <div>
        <Skeleton variant="reactangular" className={styles.thumbnail} />
      </div>
      <div className={styles.infoCell}>
        <div className={styles.titleCell}>
          <Skeleton className={styles.title} variant="rounded" width="100%" />
        </div>
        <div>
          <Skeleton variant="text" />
        </div>
        <div>
          <Skeleton variant="text" />
        </div>
        <div>
          <Skeleton variant="text" />
        </div>
        <div>
          <Skeleton variant="text" />
        </div>
      </div>
    </Card>
  );
};
